module mux_2x1_tb;
	reg in1, in2, s;
	wire out;

	mux_2x1 uut(.in1(in1), .in2(in2), .s(s), .out(out));

	initial begin
		$dumpfile("sim/mux_2x1_tb.vcd");
		$dumpvars(0, mux_2x1_tb);

		s = 0; in1 = 1; in2 = 0; #5;
		$display("s=%b in1=%b in2=%b -> out=%b (expected 1)", s, in1, in2, out);

		s = 1; in1 = 1; in2 = 0; #5;
		$display("s=%b in1=%b in2=%b -> out=%b (expected 0)", s, in1, in2, out);

		s = 1; in1 = 0; in2 = 1; #5;
		$display("s=%b in1=%b in2=%b -> out=%b (expected 1)", s, in1, in2, out);

		s = 0; in1 = 0; in2 = 0; #5;
		$display("s=%b in1=%b in2=%b -> out=%b (expected 0)", s, in1, in2, out);
		$finish;

	end
endmodule
