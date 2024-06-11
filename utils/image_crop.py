from PIL import Image
import os
from russian_auction_house.settings import BASE_DIR
from django.template.defaultfilters import slugify
from unidecode import unidecode


def create_crop_wout_tmb(instance, crop_width=600, crop_height=800):

    main_path = instance.image.path
    ratio = crop_width/crop_height
    img = Image.open(main_path)
    width, height = img.size

    if round(height * ratio) > width:
        h = round(width / ratio)
        left = 0
        top = (height - h) / 2
        right = width
        bottom = top + h
        cropped_img = img.crop((left, top, right, bottom))
    elif round(height * ratio) < width:
        w = round(height * ratio)
        left = (width - w) / 2
        top = 0
        right = (left + w)
        bottom = height
        cropped_img = img.crop((left, top, right, bottom))
    else:
        cropped_img = img
    
    resized_img = cropped_img.resize((crop_width, crop_height))
    resized_img = resized_img.convert('RGB')
    resized_img.save(main_path) 


def create_tmb(instance, crop_width=300, crop_height=200):
        main_path = instance.image.path
        ratio = crop_width/crop_height
        img = Image.open(main_path)
        width, height = img.size
        if round(height * ratio) > width:
            h = round(width / ratio)
            left = 0
            top = (height - h) / 2
            right = width
            bottom = top + h
            cropped_img = img.crop((left, top, right, bottom))
        elif round(height * ratio) < width:
            w = round(height * ratio)
            left = (width - w) / 2
            top = 0
            right = (left + w)
            bottom = height
            cropped_img = img.crop((left, top, right, bottom))
        else:
            cropped_img = img
        
        tmb = cropped_img.resize((crop_width, crop_height))
        tmb = cropped_img.convert('RGB')
        path, extension = os.path.splitext(main_path)
        path = path.split('/')
        filename = path.pop()
        path.append('tmb__' + filename)
        tmb_path = '/'.join(path) + extension
        tmb.save(tmb_path)
        tmb_path = tmb_path.replace(str(BASE_DIR), '')
        

def get_tmb_path(instance):
    main_path = instance.image.path
    path, extension = os.path.splitext(main_path)
    path = path.split('/')
    filename = path.pop()
    path.append('tmb__' + filename)
    tmb_path = '/'.join(path) + extension
    tmb_path = tmb_path.replace(str(BASE_DIR), '')
    return tmb_path


def image_directory_path(instance, filename):
    name, extension = os.path.splitext(filename)
    folder = slugify(unidecode(instance.name))
    if len(folder) > 75:
        folder = folder[:75]
    return '{0}/{1}{2}'.format(folder, slugify(unidecode(name)), '.jpg')