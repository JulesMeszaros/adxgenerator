# -*- coding: utf-8 -*-
"""
Created on Fri Jan 21 19:17:08 2022

@author: jules
"""
import os

"""
ordre des assets:
tete
epaules
crownone
crowntwo
background
"""
path = "NEW PALETTE/"

files = os.listdir(path)

sizes = [os.path.getsize("NEW PALETTE/"+f) for f in files]

files_sizes ={files[i]:sizes[i] for i in range(len(files))}

sorted_files ={k: v for k, v in sorted(files_sizes.items(), key=lambda item: item[1])}.keys()

x={s for s in sorted_files}
names = []
#background
i = 1
for f in sorted_files:
    type_a = "background"
    
    if(i>93):
        type_a = "shoulders"
    
    if(i>2*93):
        type_a = "head"
    if(i>3*93):
        type_a  = "crowntwo"
    if(i>4*93):
        type_a  = "crownone"
    
    names.append(type_a+str((i-1)%93+1)+'.png')
    
    i=i+1
    
i = 0
for index, file in enumerate(sorted_files):
    os.rename(path+file,path+names[index])
    i=i+1