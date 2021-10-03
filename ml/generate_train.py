import os
import random

image_files = []

os.chdir(os.path.join("data", "obj"))
for filename in os.listdir(os.getcwd()):
    if filename.endswith(".jpg"):
        image_files.append("data/obj/" + filename)
os.chdir("..")

image_random = random.sample(image_files,len(image_files))

train = round(len(image_random)*0.8)
test = round(len(image_random)*0.2)

with open("train.txt", "w") as outfile:
    for image in image_random[0:train]:
        outfile.write(image)
        outfile.write("\n")
    outfile.close()
    
with open("test.txt", "w") as outfile:
    for image in image_random[train:train+test]:
        outfile.write(image)
        outfile.write("\n")
    outfile.close()  
    
os.chdir("..")