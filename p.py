import os

directory_path = 'C:\\Users\\DELL\\Desktop\\New folder (2)\\github-readme-generator/icons'

files = [f for f in os.listdir(directory_path) if os.path.isfile(os.path.join(directory_path, f))]

for file in files:
    print(f"{{ fileName: '{file}', link: '', isSelected: false }},")
