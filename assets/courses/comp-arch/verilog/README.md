# Verilog

## Structure

```[bash]
./                  <-- PROJECT ROOT
    rtl/            <-- HARDWARE MODULES
        common/
        memory/
        core/
    tb/             <-- TEST BENCH
        common/
        memory/
        core/
    sim/            <-- SIMULATIONS
    compile_and_run.sh
    Makefile
    README.md
```

## Compile and Run

Usage: `./compile_and_run.sh [subdirectory] [module_name]`

Example: `./compile_and_run.sh common c4s1_mux`

Output:
```[bash]
VCD info: dumpfile sim/c4s1_mux.vcd opened for output.
s=0 in1=0 in2=1 -> out=0 (expected in1=0)
s=1 in1=0 in2=1 -> out=1 (expected in2=1)
s=1 in1=1 in2=0 -> out=0 (expected in2=0)
tb/common/c4s1_mux.v:25: $finish called at 30 (1s)
```
