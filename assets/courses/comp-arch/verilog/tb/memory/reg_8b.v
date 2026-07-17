module reg_8b_tb;
	reg [7:0] in;
	reg clk, r;
	wire [7:0] out;

	reg_8b uut(
		.in(in),
		.clk(clk),
		.r(r),
		.out(out)
	);

	initial begin
		$dumpfile("sim/reg_8b_tb.vcd");
		$dumpvars(0, reg_8b_tb);

		in <= 8'b01010101; clk <= 0; r <=1; #5; clk <= 1; #5;
		$display("in=%b clk=%b r=%b -> out=%b (expected 00000000)", in, clk, r, out);

		in <= 8'b01010101; clk <= 0; r <= 0; #5; clk <= 1; r <= 1; #5;
		$display("in=%b clk=%b r=%b -> out=%b (expected 00000000)", in, clk, r, out);

		in <= 8'b01010101; clk <= 0; r <= 0; #5; clk <= 1; #5;
		$display("in=%b clk=%b r=%b -> out=%b (expected 01010101)", in, clk, r, out);

		in <= 8'b11111111; clk <= 0; #5; clk <= 1; r <= 0; #5;
		$display("in=%b clk=%b r=%b -> out=%b (expected 11111111)", in, clk, r, out);
		$finish;

	end
endmodule
