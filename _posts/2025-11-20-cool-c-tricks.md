---
layout: post
author:
- Ali Khudiyev
title: Cool C Tricks
date: 2025-11-20 15:41:00 +0400
categories: blog C programming
---

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>1.</strong> Array initiliazation</i>
</figcaption>
<pre>
int arr[] = { 0, 1, [10]=3, 100, -1, [4]=4, 2};
printf("%zu", sizeof(arr)/sizeof(int)); // 13 ints
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>2.</strong> Struct initiliazation</i>
</figcaption>
<pre>
struct vertex {
    int i;
    enum {
        struct {
            uint8_t r;
            uint8_t g;
            uint8_t b;
        } data;
        uint8_t rgb[3];
    } color;
};

struct vertex p = { 
    .i=1, 
    .color = { 
        .data = { .r=255, .g=100, .b=40 }
    }
};

printf("%u %u %u", 
    p.color.rgb[0], 
    p.color.rgb[1], 
    p.color.rgb[2]
); // 255 100 40
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>3.</strong> Flexible array member</i>
</figcaption>
<pre>
struct vec {
    size_t len;
    int data[];
};

struct vec *vec_alloc(size_t n){
    struct vec *v = malloc(
        sizeof(struct vec) + n * sizeof(int)
    );
    if(v) v->len = n;
    return v;
}
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>4.</strong> Type punning union</i>
</figcaption>
<pre>
union fbits {
    float f;
    uint32_t u;
};

union fbits fb = { .f = 3.14 };
printf("%u", fb.u);
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>5.</strong> Macro for container address</i>
</figcaption>
<pre>
#define container_of(ptr, type, member) \
    ((type*)((char*)ptr - offsetof(type, member)))

struct pck { char name; float val; int elems; };
struct pck p = { ... };
struct pck *ptr_p = container_of(&p.val, struct pack, val);
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>6.</strong> On-the-fly lambda</i>
</figcaption>
<pre>
int age = ({
    int born_in = 1999;
    2025 - born_in;	// last line is returned
});

printf("%d", age); // 26

#define lambda(ret_type, func_body) \
    ({ ret_type __func func_body; __func; })

int (*get_age)(int) = lambda(
    int, (int born_in){
        return 2025 - born_in; 
    }
);

get_age(1999);	// 26
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>7.</strong> Generic programming (C11)</i>
</figcaption>
<pre>
#define print(x) _Generic((x), \
    int: printf("%d", x), \
    float: printf("%f", x), \
    double: printf("%lf", x), \
    char: printf("%c", x), \
)
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>8.</strong> Good goto practice :)</i>
</figcaption>
<pre>
void *jump_table[] = { &&LBL_1, &&LBL_2, &&LBL_3 };
goto *jump_table[1];

LBL_1:
printf("lbl_1\n");	// will NOT print
LBL_2:
printf("lbl_2\n");	// will print
LBL_3:
printf("lbl_3\n");	// will print
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>9.</strong> Cursed memory access</i>
</figcaption>
<pre>
int i = 3;
float pi = 3.14;

int pi_without_p = *(int*)((char*)&pi - sizeof(int));
&i; // optional: add this to tell compiler to put the damn variables in the stack
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>10.</strong> Memory alignment in struct</i>
</figcaption>
<pre>
struct __attribute__((packed)) packed {
    int8_t vals[8];
    char c;
};

struct __attribute__((aligned(32))) aligned {
    int8_t vals[8];
    char c;
};

printf("%zu %zu", 
    sizeof(struct packed),	// 33
    sizeof(struct aligned)	// 64
);
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>11.</strong> Fast table/list generation</i>
</figcaption>
<pre>
#define LIST 			\
    X(RED, "red") 		\
    X(GREEN, "green")	\
    X(BLUE, "blue")		\

#define X(name, str) name,
enum Color { LIST };
#undef X

#define X(name, str) str,
const char *color_names[] = { LIST };
#undef X
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>12.</strong> Duff's device</i>
</figcaption>
<pre>
register short *to, *from;
register count;
{
    register n = (count + 7) / 8;
    switch(count % 8){
        case 0: do { *to = *from++;
        case 7: 	 *to = *from++;
        case 6: 	 *to = *from++;
        case 5: 	 *to = *from++;
        case 4: 	 *to = *from++;
        case 3: 	 *to = *from++;
        case 2: 	 *to = *from++;
        case 1: 	 *to = *from++;
                } while (--n > 0);
    }
}
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>13.</strong> Implementation hiding</i>
</figcaption>
<pre>
typedef struct vec* vec_t;

static inline vec_t *vec_alloc(size_t n){
    vec_t { size_t len; int data[]; } *v = NULL;
    v = malloc(sizeof(vec_t) + n * sizeof(int));
    if(v) v->len = n;
    return v;
}
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>14.</strong> Double-pointer cast trick</i>
</figcaption>
<pre>
#define READ_ONCE(x) (*(volatile typeof(x)*)&(x))
#define WRITE_ONCE(x, val) (*(typeof(x)*)&(x) = (val))

// forces the compiler to actually read/write memory every time
// (bypass optimizer removing "redundant" loads/stores)
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>15.</strong> Inline assembly</i>
</figcaption>
<pre><code>
static inline uint32_t fast_div10(uint32_t n) {
    uint32_t q;
    asm volatile (
    "movl $0xcccccccd, %%ecx\n"	        // magic number
        "mull %%ecx\n"			// EDX:EAX = EAX * 0xCCCCCCCD
        "shrl $3, %%edx\n"		// q = EDX >> 3
        : "=d" (q)			// output: EDX &rarr; q
        : "a" (n)			// input:  EAX &larr; n
        : "cc"				// clobbers flags
    );
    return q;
}
</code></pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>16.</strong> Wicked arrays</i>
</figcaption>
<pre>
int arr[] = { 1, 2, 3 };
int *ptr = arr + 1;

printf("%d, %d, %d", ptr[-1], arr[1], 2[arr]); 
// prints 1, 2, 3
</pre>
</figure>

<figure>
<figcaption style="text-align: center; font-size: 12pt;">
    <i><strong>17.</strong> Raw pointer wizardry</i>
</figcaption>
<pre>
/* 
| func is a 2D array of functions (pointers) that 
| take a float number as an input and 
| return 2D array of functions (pointers), which 
| | take a float as their input and 
| | return a function (pointer) 
| | | taking an int as an input and 
| | | returning int*
*/
int *(*(*func[2][5])(float))(int *(*(*[2][5])(float))(int));

// ptr_func is the pointer holding the address of func
int *(*(*(*ptr_func)[2][5])(float))(int *(*(*[2][5])(float))(int)) = &func;
</pre>
</figure>
