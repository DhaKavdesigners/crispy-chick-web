import os
from PIL import Image, ImageDraw

def add_rounded_corners(im, rad=20):
    mask = Image.new('L', im.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([(0, 0), (im.size[0] - 1, im.size[1] - 1)], radius=rad, fill=255)
    result = im.copy().convert('RGBA')
    result.putalpha(mask)
    return result

def main():
    os.makedirs('public/items', exist_ok=True)

    items = [
        # --- From Crispy Fried Chicken Menu Collage.png (Grid of 6) ---
        {
            'file': 'public/Crispy Fried Chicken Menu Collage.png',
            'label': 'Crispy Fried Chicken – 1 pc',
            'name': 'crispy_fried_chicken',
            'box': (28, 18, 508, 428),
            'radius': 22
        },
        {
            'file': 'public/Crispy Fried Chicken Menu Collage.png',
            'label': 'Crunchy Masala Fried Chicken – 1 leg pc',
            'name': 'crunchy_masala_fried_chicken',
            'box': (528, 18, 1010, 428),
            'radius': 22
        },
        {
            'file': 'public/Crispy Fried Chicken Menu Collage.png',
            'label': 'Chicken Lolly Pop – 3 pcs',
            'name': 'chicken_lollypop',
            'box': (1030, 18, 1514, 428),
            'radius': 22
        },
        {
            'file': 'public/Crispy Fried Chicken Menu Collage.png',
            'label': 'Mini Bucket Fried Chicken – 4 pcs',
            'name': 'mini_bucket_fried_chicken',
            'box': (26, 505, 507, 922),
            'radius': 22
        },
        {
            'file': 'public/Crispy Fried Chicken Menu Collage.png',
            'label': 'Bucket Fried Chicken – 8 pcs',
            'name': 'bucket_fried_chicken',
            'box': (527, 504, 1008, 922),
            'radius': 22
        },
        {
            'file': 'public/Crispy Fried Chicken Menu Collage.png',
            'label': 'Hot Chicken Wings – 4 pcs',
            'name': 'hot_chicken_wings',
            'box': (1029, 505, 1513, 922),
            'radius': 22
        },

        # --- From Crispy Favourites Menu Grid.png (Grid of 6) ---
        {
            'file': 'public/Crispy Favourites Menu Grid.png',
            'label': 'French Fries',
            'name': 'french_fries',
            'box': (19, 16, 504, 430),
            'radius': 22
        },
        {
            'file': 'public/Crispy Favourites Menu Grid.png',
            'label': 'Smiley',
            'name': 'smiley',
            'box': (526, 17, 1008, 430),
            'radius': 22
        },
        {
            'file': 'public/Crispy Favourites Menu Grid.png',
            'label': 'Veg Nuggets',
            'name': 'veg_nuggets',
            'box': (1029, 17, 1516, 430),
            'radius': 22
        },
        {
            'file': 'public/Crispy Favourites Menu Grid.png',
            'label': 'Crispy Stick',
            'name': 'crispy_stick',
            'box': (22, 505, 504, 917),
            'radius': 22
        },
        {
            'file': 'public/Crispy Favourites Menu Grid.png',
            'label': 'Chicken Pizza',
            'name': 'chicken_pizza',
            'box': (525, 505, 1008, 917),
            'radius': 22
        },
        {
            'file': 'public/Crispy Favourites Menu Grid.png',
            'label': 'Chicken Popcorn',
            'name': 'chicken_popcorn',
            'box': (1029, 505, 1515, 917),
            'radius': 22
        },

        # --- From Crispy Chicken Favourites Menu.png (Row of 4 on top) ---
        {
            'file': 'public/Crispy Chicken Favourites Menu.png',
            'label': 'Chicken Nuggets – 3 pcs',
            'name': 'chicken_nuggets',
            'box': (24, 19, 383, 444),
            'radius': 22
        },
        {
            'file': 'public/Crispy Chicken Favourites Menu.png',
            'label': 'Chicken Strips – 3 pcs',
            'name': 'chicken_strips',
            'box': (400, 19, 759, 444),
            'radius': 22
        },
        {
            'file': 'public/Crispy Chicken Favourites Menu.png',
            'label': 'Spicy Wings – 4 pcs',
            'name': 'spicy_wings',
            'box': (774, 19, 1133, 444),
            'radius': 22
        },
        {
            'file': 'public/Crispy Chicken Favourites Menu.png',
            'label': 'Chicken Cheese Balls – 5 pcs',
            'name': 'chicken_cheese_balls',
            'box': (1149, 18, 1514, 444),
            'radius': 22
        }
    ]

    opened = {}
    for item in items:
        f = item['file']
        if f not in opened:
            opened[f] = Image.open(f).convert('RGB')
        im = opened[f]
        crop = im.crop(item['box'])
        rounded = add_rounded_corners(crop, rad=item.get('radius', 22))

        # Save to public/items/<name>.png
        out_path = os.path.join('public', 'items', f"{item['name']}.png")
        rounded.save(out_path, format='PNG', optimize=True)

        # Also save to public/<name>.png for universal path resolution
        root_path = os.path.join('public', f"{item['name']}.png")
        rounded.save(root_path, format='PNG', optimize=True)

        print(f"Generated: {item['label']} -> {out_path} ({rounded.size})")

    print("\nSUCCESS: All 16 cropped food menu images generated with smooth transparency masks!")

if __name__ == '__main__':
    main()
