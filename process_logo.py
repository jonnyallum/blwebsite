from PIL import Image
import numpy as np

def remove_background(input_path, output_path):
    try:
        img = Image.open(input_path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Check if the pixel is black (or very close to black)
            # Adjust the threshold as needed (e.g., sum of RGB values < 30)
            if item[0] < 30 and item[1] < 30 and item[2] < 30:
                newData.append((255, 255, 255, 0))  # Make it transparent
            else:
                newData.append(item)
        
        img.putdata(newData)
        img.save(output_path, "PNG")
        print(f"Successfully processed {input_path} to {output_path}")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    remove_background(
        "/home/ubuntu/bl_motorcycles/client/public/images/logo-original.png",
        "/home/ubuntu/bl_motorcycles/client/public/images/logo-transparent.png"
    )
