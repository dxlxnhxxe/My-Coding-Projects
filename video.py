import requests
import shutil

def download_video(url, local_filename):
    # Send a GET request to the URL
    with requests.get(url, stream=True) as response:
        # Check if the request was successful
        if response.status_code == 200:
            # Open a local file with the specified filename for writing binary data
            with open(local_filename, 'wb') as out_file:
                # Use shutil.copyfileobj to save the content of the response to the local file
                shutil.copyfileobj(response.raw, out_file)
            print(f"Video downloaded successfully and saved as {local_filename}")
        else:
            print(f"Failed to download video. Status code: {response.status_code}")

# URL of the video file to be downloaded
video_url = 'https://ynowfnga.xyz/e/jvoh487ecd48/star.trek.lower.decks.s03e03.1080p.web.h264-glhf.mp4'

# Local filename where the video will be saved
local_file = 'star.trek.lower.decks.s03e03.1080p.web.h264-glhf.mp4'

# Call the function to download the video
download_video(video_url, local_file)
