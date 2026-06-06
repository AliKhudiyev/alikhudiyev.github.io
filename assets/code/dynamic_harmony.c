#include <stdio.h>
#include <stdlib.h>
#include <time.h>
#include <math.h>
#include <memory.h>

#define IMG_HEIGHT 64
#define IMG_WIDTH 64
#define MAX_PIXVAL 255
#define MAX_FRAMES 1200
#define MAX_LIGHT_SRC 3
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

void dynamic_harmony(rgb_t pixarr[IMG_HEIGHT][IMG_WIDTH][3], 
					 int y, int x, int t, 
					 int Y[MAX_LIGHT_SRC], int X[MAX_LIGHT_SRC], 
					 rgb_t output[IMG_HEIGHT][IMG_WIDTH][3], 
					 int Yout[MAX_LIGHT_SRC], int Xout[MAX_LIGHT_SRC])
{
	int yp = (IMG_HEIGHT + y - 1) % IMG_HEIGHT;
	int yn = (y + 1) % IMG_HEIGHT;
	int xp = (IMG_WIDTH + x - 1) % IMG_WIDTH;
	int xn = (x + 1) % IMG_WIDTH;

	float C[MAX_LIGHT_SRC] = {0};
	float min_dist = IMG_HEIGHT+IMG_WIDTH, max_dist = 0;

	for(int i=0; i<MAX_LIGHT_SRC; ++i){
		int li1 = randint(0, MAX_LIGHT_SRC-1);
		int li2 = randint(0, MAX_LIGHT_SRC-1);
		Yout[i] = 0.7*Y[i] + 0.1*Y[li1] + 0.1*Y[li2] + 0.1*randint(0, IMG_HEIGHT-1);
		Xout[i] = 0.7*X[i] + 0.1*X[li1] + 0.1*X[li2] + 0.1*randint(0, IMG_WIDTH-1);
	}

	for(int i=0; i<MAX_LIGHT_SRC; ++i){
		if(Y[i] == y && X[i] == x){
			memcpy(output[y][x], pixarr[y][x], 3);
			return;
		}
		C[i] = sqrtf(powf(y-Y[i], 2) + powf(x-X[i], 2));
		if(C[i] < min_dist) min_dist = C[i];
		if(C[i] > max_dist) max_dist = C[i];
	}

	float rgb[3] = {0};

	for(int i=0; i<MAX_LIGHT_SRC; ++i){
		C[i] = (C[i]-max_dist)/(min_dist-max_dist);
		rgb[0] += C[i]*pixarr[Y[i]][X[i]][0];
		rgb[1] += C[i]*pixarr[Y[i]][X[i]][1];
		rgb[2] += C[i]*pixarr[Y[i]][X[i]][2];
	}

	output[y][x][0] = 0.8*output[y][x][0] + 0.2*rgb[0];
	output[y][x][1] = 0.8*output[y][x][1] + 0.2*rgb[1];
	output[y][x][2] = 0.8*output[y][x][2] + 0.2*rgb[2];
}

int main(){
	char filepath[256] = {0};
	rgb_t pixarr[IMG_HEIGHT][IMG_WIDTH][3] = {0};
	rgb_t pixarr2[IMG_HEIGHT][IMG_WIDTH][3] = {0};
	rgb_t (*currpix)[IMG_WIDTH][3] = pixarr;
	rgb_t (*nextpix)[IMG_WIDTH][3] = pixarr2;
	int Y[MAX_LIGHT_SRC] = {0};
	int X[MAX_LIGHT_SRC] = {0};
	int Ynext[MAX_LIGHT_SRC] = {0};
	int Xnext[MAX_LIGHT_SRC] = {0};

	for(int i=0; i<MAX_LIGHT_SRC; ++i){
		int y = randint(0, IMG_HEIGHT-1);
		int x = randint(0, IMG_WIDTH-1);
		Y[i] = y; X[i] = x;
		pixarr[y][x][0] = randint(0, MAX_PIXVAL);
		pixarr[y][x][1] = randint(0, MAX_PIXVAL);
		pixarr[y][x][2] = randint(0, MAX_PIXVAL);
	}

	for(int f=0; f<MAX_FRAMES; ++f){
		if((f+1)%20 == 0) printf("%d frames\n", f+1);
		snprintf(filepath, 256, "dynamic_harmony_%d.ppm", f);
		FILE *img = fopen(filepath, "wb");
		fprintf(img, "P6\n%d %d\n%d\n", 
				IMG_WIDTH, IMG_HEIGHT, MAX_PIXVAL);

		for(int y=0; y<IMG_HEIGHT; ++y){
			for(int x=0; x<IMG_WIDTH; ++x){
				fwrite(currpix[y][x], 1, 3, img);
				dynamic_harmony(currpix, y, x, f, Y, X, 
								nextpix, Ynext, Xnext);
			}
		}

		memcpy(currpix, nextpix, IMG_HEIGHT*IMG_WIDTH*3);
		memcpy(Y, Ynext, sizeof(Y));
		memcpy(X, Xnext, sizeof(X));
		fclose(img);
	}

	return 0;
}
