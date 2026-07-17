#!/bin/zsh

iverilog -o sim/$2.out $(find rtl -name "*.v") tb/$1/$2.v 

vvp sim/$2.out
