RTL := $(shell find rtl -name '*.v')

sim/%.out: tb/%.v $(RTL)
	@mkdir -p $(dir $@)
	iverilog -o $@ $(RTL) $

%: sim/%.out
	vvp $

.PHONY: clean
clean:
	rm -rf sim/*
