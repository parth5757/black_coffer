import os
from PIL import Image
from tkinter import filedialog
from tkinter import Tk

def watermark_photo(input_image_path, watermark_image_path, output_image_path):
    base_image = Image.open(input_image_path)
    watermark = Image.open(watermark_image_path).convert("RGBA")

    position = base_image.size
    newsize = (int(position[0]*8/100), int(position[0]*8/100))
    watermark = watermark.resize(newsize)

    new_positon = position[0] - newsize[0] - 20, position[1] - 20

    transparent = Image.new(mode='RGBA', size=position, color=(0, 0, 0, 0))
    transparent.paste(base_image, (0, 0))
    transparent.paste(watermark, new_positon, watermark)

    image_mode = base_image.mode
    if image_mode == 'RGB':
        transparent = transparent.convert(image_mode)
    else:
        transparent = transparent.convert('P')

    transparent.save(output_image_path, optimize=True, quality=100)

    print("Saving " + output_image_path + "...")

def browse_folder():
    Tk().withdraw()
    folder_path = filedialog.askdirectory()
    return folder_path

def browse_file(): 
    Tk().withdraw()
    file_path =filedialog.askopenfilename(filetypes=[("image files", "**.png;*.jpg")])
    return file_path

folder = browse_folder()
watermark_path = browse_file()

os.chdir(folder)
files = os.listdir(os.getcwd())
print(files)

if not os.path.isdir("output"):
    os.mkdir("output")

for f in files:
    if os.path.isfile(os.path.abspath(f)):
        if f.endswith(".png") or f.endswith(".jpg"):
            watermark_photo(f, watermark_path, "output/" +f)