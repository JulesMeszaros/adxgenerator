# -*- coding: utf-8 -*-
"""
Created on Sat Jan 22 23:49:40 2022

@author: jules
"""

from PIL import Image, ImageDraw
import numpy as np
from random import randrange

path = "generatorassets/"

nbr_eyes = 29
nbr_mouth=20
nbr_nose=10
nbr_head=93
nbr_background=93
nbr_shoulders=93
nbr_c1=93
nbr_c2=93

i=0

images =[]

def generate():

    randomeye = str(randrange(nbr_eyes)+1)
    randomhead = str(randrange(nbr_head)+1)
    randombackground = str(randrange(nbr_background)+1)
    randomnose = str(randrange(nbr_nose)+1)
    randommouth = str(randrange(nbr_mouth)+1)
    randomshoulders = str(randrange(nbr_shoulders)+1)
    randomc1 = str(randrange(nbr_c1)+1)
    randomc2 = str(randrange(nbr_c2)+1)
    
    eyes = Image.open(path+"eyes/eyes"+randomeye+".png");
    nose = Image.open(path+"nose/nose"+randomnose+".png");
    mouth = Image.open(path+"mouth/mouth"+randommouth+".png");
    shoulders = Image.open(path+"shoulders/shoulders"+randomshoulders+".png");
    background = Image.open(path+"background/background"+randombackground+".png")
    crown1 = Image.open(path+"crownone/crownone"+randomc1+".png")
    crown2 = Image.open(path+"crowntwo/crowntwo"+randomc2+".png")
    head = Image.open(path+"head/head"+randomhead+".png")

    background.paste(shoulders, (0, 0), shoulders)
    background.paste(crown1, (0, 0), crown1)
    background.paste(crown2, (0, 0), crown2)
    background.paste(head, (0, 0), head)
    background.paste(eyes, (0, 0), eyes)

    background.paste(nose, (0, 0), nose)
    background.paste(mouth, (0, 0), mouth)

    background = background.resize((500,500), Image.ANTIALIAS)
    
    images.append(background)
    background.save('batch/lion'+str(i)+'.png',"PNG")
    
while(i<100):
    generate()
    i+=1
    print(i)
    
images[0].save('batch/pillow_imagedraw.gif',
               save_all=True, append_images=images[1:], optimize=False, duration=10, loop=0)
