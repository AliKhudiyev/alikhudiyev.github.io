`timescale 1ns/1ps

module tb_d_ff_master_slave_behavioral;
    reg  d, clk;
    wire q;

    d_ff_master_slave_behavioral dut (.d(d), .clk(clk), .q(q));

    initial clk = 0;
    always #10 clk = ~clk;   // 20ns period

    initial begin
        $dumpfile("sim/d_flipflop_behavioral.vcd");
        $dumpvars(0, tb_d_ff_master_slave_behavioral);

        d = 0;
        #10  d = 1;   // set well before edge @10
        #12 d = 0;   // set well before edge @20 (master reopens then)
        #20 d = 1;   // set well before edge @40
        #8 d = 0;   // set well before edge @60
        #22 $finish;
    end

    initial
        $monitor("t=%0t  clk=%b  d=%b  |  q=%b", $time, clk, d, q);
endmodule
