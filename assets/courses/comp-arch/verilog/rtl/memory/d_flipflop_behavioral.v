module d_ff_master_slave_behavioral (
    input  wire d,
    input  wire clk,
    output reg  q
);
    reg master;

    // Master latch: transparent while clk = 0, holds while clk = 1
    always @(*)
        if (!clk) master = d;

    // Slave latch: transparent while clk = 1, holds while clk = 0
    always @(*)
        if (clk) q = master;
endmodule
