#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <memory.h>

#define IMG_HEIGHT 64
#define IMG_WIDTH 64
#define MAX_PIXVAL 255
#define MAX_FRAMES 1200
#define RAND_SEED 42
#define EPS 1e-6

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

void dynamic_harmony2(rgb_t pixarr[IMG_HEIGHT][IMG_WIDTH][3], 
					  int y, int x, int t, 
					  rgb_t output[IMG_HEIGHT][IMG_WIDTH][3])
{
	int yp = (IMG_HEIGHT + y - 1) % IMG_HEIGHT;
	int yn = (y + 1) % IMG_HEIGHT;
	int xp = (IMG_WIDTH + x - 1) % IMG_WIDTH;
	int xn = (x + 1) % IMG_WIDTH;

	float ynorm = (float)y / IMG_HEIGHT;
	float xnorm = (float)x / IMG_WIDTH;
	
	output[y][x][0] = 0.9*output[y][x][0] + 0.1*MAX_PIXVAL*sinf(t+ynorm*xnorm);
	output[y][x][1] = 0.9*output[y][x][1] + 0.1*MAX_PIXVAL*cosf(t*ynorm*xnorm);
	output[y][x][2] = 0.9*output[y][x][2] + 0.1*MAX_PIXVAL*sinf(t*ynorm*xnorm)*cosf(t+ynorm*xnorm);
}

int main(){
	char filepath[256] = {0};
	rgb_t pixarr[IMG_HEIGHT][IMG_WIDTH][3] = {0};
	rgb_t pixarr2[IMG_HEIGHT][IMG_WIDTH][3] = {0};
	rgb_t (*currpix)[IMG_WIDTH][3] = pixarr;
	rgb_t (*nextpix)[IMG_WIDTH][3] = pixarr2;

	for(int f=0; f<MAX_FRAMES; ++f){
		if((f+1)%20 == 0) printf("%d frames\n", f+1);
		snprintf(filepath, 256, "dynamic_harmony2_%d.ppm", f);
		FILE *img = fopen(filepath, "wb");
		fprintf(img, "P6\n%d %d\n%d\n", 
				IMG_WIDTH, IMG_HEIGHT, MAX_PIXVAL);

		for(int y=0; y<IMG_HEIGHT; ++y){
			for(int x=0; x<IMG_WIDTH; ++x){
				fwrite(currpix[y][x], 1, 3, img);
				dynamic_harmony2(currpix, y, x, f, nextpix);
			}
		}

		memcpy(currpix, nextpix, IMG_HEIGHT*IMG_WIDTH*3);
		fclose(img);
	}

	return 0;
}
