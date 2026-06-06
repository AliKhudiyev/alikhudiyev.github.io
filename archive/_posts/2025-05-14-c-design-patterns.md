---
layout: post
author:
- Ali Khudiyev
title: "Design Patterns in C (revisited)"
date: 2025-05-14 12:21:00 +0400
categories: archive architecture design programming
---

While junior software developers are copy-pasting blocks of code
snippets from LLMs, senior software engineers do the sacred job that no
Devin is capable of doing when it comes to highly complicated software:
they design the architecture for the software to be written. During the
implementation, developers face complex problems that they need to
solve, and by which I mean write clean and maintainable code. Doing so
requires a high level of thinking to understand the generic templates of
the underlying solution space and then picking the one that seems to
suit the task best. That's where the design patterns come in. There are
three types of design patterns:

- **Creational patterns** --- patterns that concern with object creation
  without requiring direct object initialization,

- **Structural patterns** --- patterns concerning object composition,

- **Behavioral patterns** --- patterns concerned with
  inter-communication among objects.

All of these design patterns were initially proposed by 4 programmers
(Erich Gamma, Richard Helm, Ralph Johnson, and John Vlissides) in their
book titled Design Patterns: Elements of Reusable Object-Oriented
Software. However, these patterns apply beyond OO programming. Today,
I'll briefly demonstrate how many of these design patterns can be used
in C, a procedural programming language. Below you will find toy C
programs for the design patterns; the common structure of these toy
examples will always contain 3 code blocks (i.e., pattern.h, pattern.c,
and main.c) and one optional code block at the end that represents the
stdout. Whenever there are only 3 code blocks, you should look for the
assert statements in the main.c file to understand the behavior of the
code better.

Note: The code snippets provided in this blog post are not
production-ready, nor are they an example of good conventions or
practices; they are there for the purpose of a quick illustration of
different design patterns. You may see no memory deallocations, random
struct fields, and changing code structure because none of this is
relevant to this post. The codes are available at this [*GitHub
repo*](https://github.com/AliKhudiyev/C-Design-Patterns).

# Creational Patterns

## Factory pattern

The factory pattern requires implementing a method that creates objects
without specifying the exact class to create. Let's see it in practice.

**factory.h** file:

```[language="C"]
enum Food{
    SALAD = 0,
    SOUP,
    STAKE,
};

struct Salad;
struct Soup;
struct Stake;
void *factory_make_food(enum Food food);
```

**factory.c** file:

```[language="C"]
#include "factory.h"
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

struct Salad{
    char veggies[10][100];
};

struct Salad *make_salad(){
    struct Salad *salad = malloc(sizeof(struct Salad));
    strcpy(salad->veggies[0], "cucumber");
    strcpy(salad->veggies[1], "cabbage");
    strcpy(salad->veggies[2], "tomato");
    fprintf(stdout, "making salad...\n");
    return salad;
}

struct Soup{
    char has_chicken;
    float temp;
};

struct Soup *make_soup(){
    struct Soup *soup = malloc(sizeof(struct Soup));
    soup->has_chicken = 1;
    soup->temp = 60;
    fprintf(stdout, "making a chicken soup...\n");
    return soup;
}

struct Stake{
    char is_vegan;
    char how_cooked[32];
};

struct Stake *make_stake(){
    struct Stake *stake = malloc(sizeof(struct Stake));
    stake->is_vegan = 0;
    strcpy(stake->how_cooked, "well done");
    fprintf(stdout, "making a %s stake...\n", stake->how_cooked);
    return stake;
}

void *factory_make_food(enum Food food){
    if(food == SALAD) return make_salad();
    if(food == SOUP) return make_soup();
    if(food == STAKE) return make_stake();
    fprintf(stderr, "No such food item.\n");
    return 0;
}
```

**main.c** file:

```[language="C"]
#include "factory.h"

int main(){
    struct Burger *burger = make_chicken_ketchup_chili_burger(MEDIUM);
    assert(burger->meat == CHICKEN);
    for(int i=0; i<5; ++i) assert(burger->veggies[i] == NO_VEGGY);
    assert(burger->sauces[0] == KETCHUP && burger->sauces[1] == CHILI);
    return 0;
}
```

This is what the output looks like:

```[language="bash"]
making salad...
making a chicken soup...
making a well done stake...
```

## Builder pattern

The builder pattern requires implementing a set of methods to construct
a complex object piece by piece. Let's see it in practice.

**builder.h** file:

```[language="C"]
enum Size{
    SMALL = 0,
    MEDIUM,
    BIG,
};

enum Meat{
    NO_MEAT = 0,
    BEEF,
    CHICKEN,
};

enum Veggy{
    NO_VEGGY = 0,
    TOMATO,
    CABBAGE,
};

enum Sauce{
    NO_SAUCE = 0,
    KETCHUP,
    CHILI,
    BBQ,
};

struct Burger{
    enum Meat meat;
    enum Veggy veggies[5];
    enum Sauce sauces[3];
    unsigned weight;
    unsigned vi, si;
};

struct Burger *make_burger(enum Size size);
struct Burger *reset_burger(enum Size size, struct Burger2 *burger);
struct Burger *add_meat(enum Meat meat, struct Burger2 *burger);
struct Burger *add_veggy(enum Veggy veggy, struct Burger2 *burger);
struct Burger *add_sauce(enum Sauce sauce, struct Burger2 *burger);
```

**builder.c** file:

```[language="C"]
#include "builder.h"
#include <stdlib.h>
#include <memory.h>

struct Burger *make_burger(enum Size size){
    struct Burger *burger = malloc(sizeof(struct Burger));
    memset(burger, 0, sizeof(struct Burger));
    burger->weight = (size == SMALL ? 150 : (size == MEDIUM ? 250 : 500));
    return burger;
}

struct Burger *reset_burger(enum Size size, struct Burger *burger){
    memset(burger, 0, sizeof(struct Burger));
    burger->weight = (size == SMALL ? 150 : (size == MEDIUM ? 250 : 500));
    return burger;
}

struct Burger *add_meat(enum Meat meat, struct Burger *burger){
    burger->meat = meat;
    return burger;
}

struct Burger *add_veggy(enum Veggy veggy, struct Burger *burger){
    burger->veggies[burger->vi] = veggy;
    burger->vi = (burger->vi + 1)%5;
    return burger;
}

struct Burger *add_sauce(enum Sauce sauce, struct Burger *burger){
    burger->sauces[burger->si] = sauce;
    burger->si = (burger->si + 1)%3;
    return burger;
}
```

**main.c** file:

```[language="C"]
#include "builder.h"

int main(){
    struct Burger2 *burger = make_burger(SMALL);
    add_sauce(BBQ,
    add_sauce(CHILI,
    add_veggy(TOMATO,
    add_meat(BEEF,
    reset_burger(BIG,
    add_meat(CHICKEN, burger))))));
    assert(burger->weight == 500);
    assert(burger->meat == BEEF);
    assert(burger->veggies[0] == TOMATO);
    assert(burger->sauces[0] == CHILI);
    assert(burger->sauces[1] == BBQ);
    return 0;
}
```

## Singleton pattern

The singleton pattern requires a restricted object creation to allow
only a single instance to be created during the lifetime of a program.
Let's see it in practice.

**singleton.h** file:

```[language="C"]
struct DBSesh;
struct DBSesh *make_dbsesh();

singleton.c file:

#include "singleton.h"

static struct DBSesh{
  // whatever
} *g_dbsesh = NULL;

struct DBSesh *make_dbsesh(){
  if(!g_dbsesh){
    g_dbsesh = malloc(sizeof(struct DBSesh));
    memset(g_dbsesh, 0, sizeof(struct DBSesh));
    // proper initialization
  }
  return g_dbsesh;
}
```

**main.c** file:

```[language="C"]
#include "singleton.h"
#include <assert.h>

int main(){
  struct DBSesh *dbsesh = make_dbsesh();
  assert(dbsesh == make_dbsesh());
  assert(make_dbsesh() == make_dbsesh());
  return 0;
}
```

# Structural Patterns

## Facade pattern

The facade pattern requires implementing a method that simplifies/hides
a whole bunch of calls to other methods. Let's see it in practice.

**facade.h** file:

```[language="C"]
struct GameSetting;
struct GameSetting *make_default_setting();
void low_settings(struct GameSetting *setting);
void medium_settings(struct GameSetting *setting);
void high_settings(struct GameSetting *setting);
void ultra_settings(struct GameSetting *setting);
```

**facade.c** file:

```[language="C"]
#include "facade.h"
#include <stdlib.h>

struct GameSetting{
  unsigned xres, yres;
  float ratio;
  unsigned target_fps;
  float character_speed;
  unsigned render_depth;
  unsigned flags;
}

static void set_resolution(struct GameSetting *setting, unsigned xres, unsigned yres){
  setting->xres = xres;
  setting->yres = yres;
  setting->ratio = (float)xres / (float)yres;
}

static void set_target_fps(struct GameSetting *setting, unsigned fps){
  setting->target_fps = fps - (setting->xres * setting->yres / 100);
  setting->character_speed = 1.5*fps;
}

static void set_render_depth(struct GameSetting *setting, unsigned depth){
  setting->render_depth = depth;
  if(depth <= 10){ setting->flags = 0xff00a032; }
  else if(depth <= 40){ setting->flags = 0x0faaa000; }
  else if(depth <= 100){ setting->flags = 0x4f00a032; }
  else{ setting->flags = 0xffffffff; }
}

struct GameSetting *make_default_setting(){
  struct GameSetting *setting = malloc(sizeof(struct GameSetting));
  set_resolution(setting, 1920, 1080);
  set_target_fps(setting, 60);
  set_render_depth(setting, 35);
  return setting;
}

void low_setting(struct GameSetting *setting){
  set_resolution(setting, 1280, 720);
  set_target_fps(setting, 45);
  set_render_depth(setting, 10);
}

void medium_setting(struct GameSetting *setting){
  set_resolution(setting, 1920, 1080);
  set_target_fps(setting, 75);
  set_render_depth(setting, 40);
}

void high_setting(struct GameSetting *setting){
  set_resolution(setting, 3840, 2160);
  set_target_fps(setting, 100);
  set_render_depth(setting, 100);
}

void ultra_setting(struct GameSetting *setting){
  set_resolution(setting, 3840, 2160);
  set_target_fps(setting, 240);
  set_render_depth(setting, 150);
}
```

**main.c** file:

```[language="C"]
#include "facade.h"
#include <assert.h>

int main(){
  struct GameSetting *setting = make_default_setting();
  high_settings(setting);
  low_settings(setting);
  ultra_settings(setting);
  return 0;
}
```

## Proxy pattern

The proxy pattern requires implementing a method that acts like an
intermediary to access and manipulate another object that the user
should not be given a direct access to. Let's see it in practice.

**proxy.h** file:

```[language="C"]
struct RawLog;
struct Log{
    unsigned time_elapsed;
    char sys_name[100];
    struct RawLog *rawlog;
};

struct Log *make_log(const char *filepath);
void log_info(struct Log *log, const char *msg);
void log_alert(struct Log *log, const char *msg);
void log_warn(struct Log *log, const char *msg);
void log_abort(struct Log *log, const char *msg);
void log_syscheck(struct Log *log);
```

**proxy.c** file:

```[language="C"]
#include "proxy.h"
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

static struct RawLog{
    FILE *file;
    unsigned entry_count;
    float fail_ratio;
} g_rawlog = {0};

static void init_rawlog(struct RawLog *log, const char *filepath){
    log->file = fopen(filepath, "w");
    log->entry_count = 0;
    log->fail_ratio = 0;
}

static void write_rawlog(struct RawLog *log, const char *msg, unsigned char fail){
    fprintf(log->file, "%s\n", msg);
    log->fail_ratio = (log->fail_ratio * log->entry_count + fail) /
                      (float)log->entry_count;
    ++log->entry_count;
}

struct Log *make_log(const char *filepath){
    struct Log *log = malloc(sizeof(struct Log));
    log->time_elapsed = 0;
    strcpy(log->sys_name, "whos-gon-carry-the-logs-v1.2");
    log->rawlog = &g_rawlog;
    if(!g_rawlog.file){ init_rawlog(&g_rawlog, filepath); }
    return log;
}

void log_info(struct Log *log, const char *msg){
    const char *head = "INFO: ";
    char *str = malloc(strlen(head)+strlen(msg)+1);
    sprintf(str, "%s%s", head, msg);
    write_rawlog(log->rawlog, str, 0);
}

void log_alert(struct Log *log, const char *msg){
    const char *head = "ALERT: ";
    char *str = malloc(strlen(head)+strlen(msg)+1);
    sprintf(str, "%s%s", head, msg);
    write_rawlog(log->rawlog, str, 0);
}

void log_warn(struct Log *log, const char *msg){
    const char *head = "WARNING: ";
    char *str = malloc(strlen(head)+strlen(msg)+1);
    sprintf(str, "%s%s", head, msg);
    write_rawlog(log->rawlog, str, 0);
}

void log_abort(struct Log *log, const char *msg){
    const char *head = "ERROR: ";
    char *str = malloc(strlen(head)+strlen(msg)+1);
    sprintf(str, "%s%s", head, msg);
    write_rawlog(log->rawlog, str, 1);
}

void log_syscheck(struct Log *log){
    const char *sysname = "SYSNAME: ";
    const char *elapsed = "ELAPSED: ";
    char *str = malloc(strlen(sysname)+100+strlen(elapsed)+10+4);
    sprintf(str, "%s%s | %s%u",
            sysname, log->sys_name, elapsed, log->time_elapsed);
    write_rawlog(log->rawlog, str, 0);
}
```

**main.c** file:

```[language="C"]
#include "proxy.h"

int main(){
    struct Log *log = make_log("log.dat");
    log_syscheck(log);
    log_info(log, "hello world!");
    log_alert(log, "this is an alert...");
    log_warn(log, "the system has a warning");
    log_abort(log, "aborting due to critical error!");
    return 0;
}
```

# Behavioral Patterns

## Iterator pattern

The iterator pattern requires implementing a method whose sole purpose
is to simplify the traversal of a complex object's parts. Let's see it
in practice.

**iterator.h** file:

```[language="C"]
enum Type{
  TEXT = 0,
  TREE
};

struct Iterator{
  enum Type type;
  void *container;
  void *iter;
};
struct Iterator get_iterator(void *container);
char get_next(struct Iterator *iter);

struct Text;
struct Text *make_text(const char *str);

struct Tree;
struct Tree *make_tree(const char *str);
```

**iterator.c** file:

```[language="C"]
#include "iterator.h"
#include <string.h>
#include <stdlib.h>

struct Iterator get_iterator(void *container){
  return *(struct Iterator*)container;
}

char get_next(struct Iterator *iter){
   char c = 0;
  if(iter->type == TEXT){
    const char *begin = ((struct Text*)(iter->container))->str;
    size_t size = strlen(begin);
    if(begin + size > (char*)iter->iter){
      c = *((char*)iter->iter++);
    }
  } else if(iter->type == TREE){
    struct Tree *node = (struct Tree*)(iter->iter);
    if(node){
      c = node->chr;
      if(node->left){ iter->iter = node->left; }
      else if(node->right){ iter->iter = node->right; }
      else{
        struct Tree *parn = node->parent;
        for(; parn; parn=parn->parent){
          if(!parn->right || parn->right == node) node = parn;
          else break;
        }
        iter->iter = parn ? parn->right : 0;
      }
    }
  }
  return c;
}

struct Text{
  struct Iterator iter;
  char *str;
};

struct Text *make_text(const char *str){
  struct Text *text = malloc(sizeof(struct Text));
  text->str = malloc(strlen(str)+1);
  strncpy(text->str, str, strlen(str)+1);
  text->iter = (struct Iterator){.type=TEXT, .container=text, .iter=text->str};
  return text;
}

struct Tree{
  struct Iterator iter;
  char chr;
  struct Tree *parent, *left, *right;
};

static size_t _get_index(size_t depth, size_t col){
  size_t index = 0;
  for(size_t i=1; i<depth; ++i) index = 2*index + 1;
  return index + col;
}

static Tree *_make_tree(const char *str, struct Tree *root, struct Tree *node, size_t depth, size_t col){
  size_t index = _get_index(depth, col);
  if(strlen(str) <= index) return 0;
  node = malloc(sizeof(struct Tree));
  node->chr = str[index];
  node->parent = root;
  node->left = _make_tree(str, node, node->left, depth+1, col*2);
  node->right = _make_tree(str, node, node->right, depth+1, col*2+1);
  return node;
}

struct Tree *make_tree(const char *str){
  struct Tree *tree = _make_tree(str, 0, 0, 1, 0);
  tree->iter = (struct Iterator){.type=TREE, .container=tree, .iter=tree};
  return tree;
}
```

**main.c** file:

```[language="C"]
#include "iterator.h"
#include <assert.h>

int main(){
  struct Text *txt = make_text("Hello World!");
  struct Tree tree = make_tree("Hello World!");
  struct Iterator iter;

  char chr = 0;
  unsigned i = 0;

  iter = get_iterator((void*)text);
  while((chr=get_next(&iter))) assert(chr == "Hello World!"[i++]);
  i = 0;

  iter = get_iterator((void*)tree);
  while((val=get_next(&iter)) assert(chr == "Heloroldl !W"[i++]);
  return 0;
}
```

## Observer pattern

The observer pattern requires implementing a method to communicate a new
piece of information to multiple clients (preferably in a distributed
way). Let's see it in practice.

**observer.h** file:

```[language="C"]
struct User;
struct Podcast;

struct User *make_user(const char *name);
void subscribe(struct Podcast *podcast, struct User *user);
void unsubscribe(struct Podcast *podcast, struct User *user);
void user_receive(struct User *user, const char *msg);

struct Podcast *make_podcast(const char *title);
void notify(struct Podcast *podcast, const char *message);
```

**observer.c** file:

```[language="C"]
#include "observer.h"
#include <stdlib.h>
#include <string.h>
#include <stdio.h>

struct User{
    char name[100];
    size_t pod_count;
    struct Podcast **pods;
};

struct Podcast{
    char title[100];
    size_t sub_count;
    struct User **subs;
};

struct User *make_user(const char *name){
    struct User *user = malloc(sizeof(struct User));
    strcpy(user->name, name);
    user->pod_count = 0;
    return user;
}

void subscribe(struct Podcast *podcast, struct User *user){
    podcast->subs = realloc(podcast->subs, podcast->sub_count+1);
    podcast->subs[podcast->sub_count] = user;
    ++podcast->sub_count;

    user->pods = realloc(user->pods, user->pod_count+1);
    user->pods[user->pod_count] = podcast;
    ++user->pod_count;
}

void unsubscribe(struct Podcast *podcast, struct User *user){
    for(size_t i=0; i<podcast->sub_count; ++i){
        if(podcast->subs[i] == user){
            podcast->subs[i] = 0;
            break;
        }
    }

    for(size_t i=0; i<user->pod_count; ++i){
        if(user->pods[i] == podcast){
            user->pods[i] = 0;
            break;
        }
    }
}

void user_receive(struct User *user, const char *msg){
    fprintf(stdout, "User: (%s) received a message: [%s]\n", user->name, msg);
}

struct Podcast *make_podcast(const char *title){
    struct Podcast *podcast = malloc(sizeof(struct Podcast));
    strcpy(podcast->title, title);
    podcast->sub_count = 0;
    return podcast;
}

void notify(struct Podcast *podcast, const char *message){
    for(size_t i=0; i<podcast->sub_count; ++i){
        if(podcast->subs[i]) user_receive(podcast->subs[i], message);
    }
}
```

**main.c** file:

```[language="C"]
#include "observer.h"

int main(){
    struct Podcast *podcast = make_podcast("Design Patterns");
    struct User *users[3] = {
        make_user("Adam"),
        make_user("i'm just a guy"),
        make_user(" ")
    };
    subscribe(podcast, users[0]);
    notify(podcast, "New episode is up!");

    subscribe(podcast, users[1]);
    subscribe(podcast, users[2]);
    unsubscribe(podcast, users[0]);
    notify(podcast, "Yet another episode.");
    return 0;
}
```

Here's what the output looks like:

    User: (Adam) received a message: [New episode is up!]
    User: (i'm just a guy) received a message: [Yet another episode.]
    User: ( ) received a message: [Yet another episode.]

## Strategy pattern

The strategy pattern requires implementing a flexible method whose
behavior is easily changeable at runtime by selecting one of multiple
possible algorithms to be executed. Let's see it in practice.

**strategy.h** file:

```[language="C"]
struct Person{
    char name[100];
    unsigned char age;
    double balance;
    long _hash;
};

void change_name(struct Person *person, const void *name);
void change_age(struct Person *person, const void *age);
void change_balance(struct Person *person, const void *balance);

void edit_person_info(struct Person *person, void *data, void (*meth)(struct Person*, const void*));
```

**strategy.c** file:

```[language="C"]
#include <string.h>
#include "strategy.h"

void change_name(struct Person *person, const void *name){
    strncpy(person->name, (const char*)name, 100);
}
void change_age(struct Person *person, const void *age){
    person->age = *(const unsigned char*)age;
}
void change_balance(struct Person *person, const void *balance){
    person->balance = *(const double*)balance;
}

void edit_person_info(struct Person *person, void *data, void (*meth)(struct Person*, const void*)){
    meth(person, data);
    for(int i=0; i<100; i+=4)
        person->_hash ^= *(int*)(person->name + i);
    person->_hash ^= person->age;
    person->_hash ^= *(long*)&person->balance;
}
```

**main.c** file:

```[language="C"]
#include <assert.h>
#include <string.h>
#include "strategy.h"

int main(){
    struct Person p = {.name="Adam", .age=28, .balance=128.32};
    edit_person_info(&p, "Adam Smith", change_name);
    edit_person_info(&p, (unsigned char[]){30}, change_age);
    edit_person_info(&p, (double[]){-5.8}, change_balance);
    assert(!strcmp(p.name, "Adam Smith"));
    assert(p.age == 30);
    assert(p.balance == -5.8);
    return 0;
}
```

## State pattern

The state pattern requires implementing a set of methods that represent
the functionality of a system in each possible state independently, and
then transitioning between those possible states. Let's see it in
practice.

**strategy.h** file:

```[language="C"]
enum Item{
  NONE = 0,
  COLA = 5,
  JELLY = 3,
  KITKAT = 4,
  MARS = 2,
};

struct VendingMachine;
struct VendingMachine *make_vmachine();
int select_item(struct VendingMachine *mac, enum Item item);
int insert_dime(struct VendingMachine *mac);
int buy_selected(struct VendingMachine *mac);
int reset_all(struct VendingMachine *mac);
```

**strategy.c** file:

```[language="C"]
#include "state.h"
#include <stdlib.h>
#include <stdio.h>

static struct MachineState{
    int (*insert_dime)(struct VendingMachine *mac);
    int (*select_item)(struct VendingMachine *mac, enum Item item);
    int (*buy_selected)(struct VendingMachine *mac);
    int (*reset_all)(struct VendingMachine *mac);
} g_selection_state, g_insertion_state, g_purchase_state;

struct VendingMachine{
    enum Item item;
    unsigned balance;
    struct MachineState *state;
};

static int selection_state_insert_dime(struct VendingMachine *mac){
    fprintf(stderr, "You need to select an item first.\n");
    return -1;
}

static int selection_state_select_item(struct VendingMachine *mac, enum Item item){
    mac->item = item;
    if(item != NONE){
        mac->state = &g_insertion_state;
        return 1;
    }
    fprintf(stderr, "Select a valid item.\n");
    return -1;
}

static int selection_state_buy_selected(struct VendingMachine *mac){
    fprintf(stderr, "You need to select an item first.\n");
    return -1;
}

static int insertion_state_select_item(struct VendingMachine *mac, enum Item item){
    fprintf(stdout, "A new item has been selected.\n");
    if(mac->balance >= (int)item){ mac->state = &g_purchase_state; }
    else{ fprintf(stdout, "You don't have sufficient balance for the item.\n"); }
    return 0;
}

static int insertion_state_insert_dime(struct VendingMachine *mac){
    fprintf(stdout, "A dime has been inserted.\n");
    if(++mac->balance >= (int)mac->item){
        fprintf(stdout, "You can buy the item now.\n");
        mac->state = &g_purchase_state;
    }
    return 1;
}

static int insertion_state_buy_selected(struct VendingMachine *mac){
    fprintf(stderr, "You need to insert a dime.\n");
    return -1;
}

static int purchase_state_select_item(struct VendingMachine *mac, enum Item item){
    fprintf(stdout, "A new item has been selected.\n");
    if(mac->balance < (int)item){
        fprintf(stdout, "Your balance is unsufficient.\n");
        mac->state = &g_insertion_state;
    }
    else{ fprintf(stdout, "You can buy the item now.\n"); }
    return 1;
}

static int purchase_state_insert_dime(struct VendingMachine *mac){
    fprintf(stderr, "Your balance is already sufficient.\n");
    return -1;
}

static int purchase_state_buy_selected(struct VendingMachine *mac){
    fprintf(stdout, "You bought the item for %d dimes.\n", (int)mac->item);
    fprintf(stdout, "%d dimes have been refunded.\n", mac->balance - (int)mac->item);
    mac->item = NONE;
    mac->balance = 0;
    mac->state = &g_selection_state;
    return 1;
}

static int any_state_reset_all(struct VendingMachine *mac){
    fprintf(stdout, "Take your %d dimes.\n", mac->balance);
    mac->item = NONE;
    mac->balance = 0;
    mac->state = &g_selection_state;
    return 1;
}

struct VendingMachine *make_vmachine(){
    struct VendingMachine *mac = malloc(sizeof(struct VendingMachine));
    mac->item = NONE;
    mac->balance = 0;
    mac->state = &g_selection_state;

    g_selection_state = (struct MachineState){
        .select_item=selection_state_select_item,
        .insert_dime=selection_state_insert_dime,
        .buy_selected=selection_state_buy_selected,
        .reset_all=any_state_reset_all
    };

    g_insertion_state = (struct MachineState){
        .select_item=insertion_state_select_item,
        .insert_dime=insertion_state_insert_dime,
        .buy_selected=insertion_state_buy_selected,
        .reset_all=any_state_reset_all
    };

    g_purchase_state = (struct MachineState){
        .select_item=purchase_state_select_item,
        .insert_dime=purchase_state_insert_dime,
        .buy_selected=purchase_state_buy_selected,
        .reset_all=any_state_reset_all
    };

    return mac;
}

int select_item(struct VendingMachine *mac, enum Item item){
    return mac->state->select_item(mac, item);
}

int insert_dime(struct VendingMachine *mac){
    return mac->state->insert_dime(mac);
}

int buy_selected(struct VendingMachine *mac){
    return mac->state->buy_selected(mac);
}

int reset_all(struct VendingMachine *mac){
    return mac->state->reset_all(mac);
}
```

**main.c** file:

```[language="C"]
#include "strategy.h"
#includde <assert.h>

int main(){
    struct VendingMachine *mac = make_vmachine();
    assert(insert_dime(mac) == -1);
    assert(select_item(mac, JELLY) == 1);
    assert(buy_selected(mac) == -1);
    assert(insert_dime(mac) == 1);
    assert(insert_dime(mac) == 1);
    assert(insert_dime(mac) == 1);
    assert(select_item(mac, MARS) == 1);
    assert(insert_dime(mac) == -1);
    assert(select_item(mac, KITKAT) == 1);
    assert(insert_dime(mac) == 1);
    assert(select_item(mac, JELLY) == 1);
    assert(buy_selected(mac) == 1);
    return 0;
}
```

Here is the program's output:

    You need to select an item first.
    You need to insert a dime.
    A dime has been inserted.
    A dime has been inserted.
    A dime has been inserted.
    You can buy the item now.
    A new item has been selected.
    You can buy the item now.
    Your balance is already sufficient.
    A new item has been selected.
    Your balance is unsufficient.
    A dime has been inserted.
    You can buy the item now.
    A new item has been selected.
    You can buy the item now.
    You bought the item for 3 dimes.
    1 dimes have been refunded.

# Conclusion

You have seen several examples illustrating different design patterns in
C. However, there are more design patterns than what you have seen in
this post so far. Hopefully, the examples were clear, although they
weren't written using the \"best practices\" in the classical software
engineering world. Speaking of best practices, there is no single \"the
best\" design pattern that fits well in every domain of programming.
What you may see in practice is the hybrid approach where multiple
design patterns are smushed together to make things work. It is also
worth noting that it is not always recommended to use as many design
patterns as possible because if you are doing it just for the sake of
doing it, then you are doing it wrong. The purpose of design patterns is
to have a structured program that is readable and easy to maintain by
other programmers; it is not to overcomplicate things to show your level
of understanding in different patterns and ignorance in actual software
development.
