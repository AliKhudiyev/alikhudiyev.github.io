module c4s1_mux_tb;
	reg in1, in2, s;
	wire out;

	c4s1_mux mux(
		.in1(in1),
		.in2(in2),
		.s(s),
		.out(out)
	);

	initial begin
		$dumpfile("sim/c4s1_mux.vcd");
		$dumpvars(0, c4s1_mux_tb);

		in1 = 0; in2 = 1; s = 0; #10;
		$display("s=%b in1=%b in2=%b -> out=%b (expected in1=%b)", s, in1, in2, out, in1);

		in1 = 0; in2 = 1; s = 1; #10;
		$display("s=%b in1=%b in2=%b -> out=%b (expected in2=%b)", s, in1, in2, out, in2);

		in1 = 1; in2 = 0; s = 1; #10;
		$display("s=%b in1=%b in2=%b -> out=%b (expected in2=%b)", s, in1, in2, out, in2);

		$finish;

	end
endmodule
