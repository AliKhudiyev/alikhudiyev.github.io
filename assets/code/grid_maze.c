#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <memory.h>

#define IMG_HEIGHT 64
#define IMG_WIDTH 64
#define MAX_PIXVAL 1
#define MAX_FRAMES 1200
#define RAND_SEED 42

typedef unsigned char rgb_t;

float unirand(){
	return (float)rand() / (float)RAND_MAX;
}

float randflt(float min, float max){
	return min + unirand()*(max-min);
}

int randint(int min, int max){
	return min + rand()%(max-min);
}

void grid_maze(rgb_t pixarr[IMG_HEIGHT][IMG_WIDTH], 
			   int y, int x, int t, 
			   rgb_t output[IMG_HEIGHT][IMG_WIDTH])
{
	int yp = (IMG_HEIGHT + y - 1) % IMG_HEIGHT;
	int yn = (y + 1) % IMG_HEIGHT;
	int xp = (IMG_WIDTH + x - 1) % IMG_WIDTH;
	int xn = (x + 1) % IMG_WIDTH;

	int empty = pixarr[yp][x] + pixarr[yn][x] + 
				pixarr[y][xp] + pixarr[y][xn];

	rgb_t *pix = 0;
	if(pixarr[yp][x]){
		pix = output[yp] + x;
	} else if(pixarr[yn][x]){
		pix = output[yn] + x;
	} else if(pixarr[y][xp]){
		pix = output[y] + xp;
	} else if(pixarr[y][xn]){
		pix = output[y] + xn;
	}

	if(empty == 4 && unirand() < 0.8/(t+1)){
		output[yp][x] = 0;
	} else if(empty < 4 && empty > 1 && unirand() < 0.25/(t+1)){
		*pix = 1;
	} else if(!empty){
		output[yp][x] = 1;
	}
}

int main(){
	char filepath[256] = {0};
	rgb_t pixarr[IMG_HEIGHT][IMG_WIDTH] = {0};
	rgb_t pixarr2[IMG_HEIGHT][IMG_WIDTH] = {0};
	rgb_t (*currpix)[IMG_WIDTH] = pixarr;
	rgb_t (*nextpix)[IMG_WIDTH] = pixarr2;

	for(int f=0; f<MAX_FRAMES; ++f){
		if((f+1)%20 == 0) printf("%d frames\n", f+1);
		snprintf(filepath, 256, "grid_maze_%d.ppm", f);
		FILE *img = fopen(filepath, "wb");
		fprintf(img, "P6\n%d %d\n%d\n", 
				IMG_WIDTH, IMG_HEIGHT, MAX_PIXVAL);

		for(int y=0; y<IMG_HEIGHT; ++y){
			for(int x=0; x<IMG_WIDTH; ++x){
				fwrite(currpix[y]+x, 1, 1, img); // R
				fwrite(currpix[y]+x, 1, 1, img); // G
				fwrite(currpix[y]+x, 1, 1, img); // B
				grid_maze(currpix, y, x, powf(f, 1.5), nextpix);
			}
		}

		memcpy(currpix, nextpix, IMG_HEIGHT*IMG_WIDTH);
		fclose(img);
	}

	return 0;
}
