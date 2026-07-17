module sr_latch_tb;
	reg s, r;
	wire q, q_n;

	sr_latch srlatch(
		.s(s),
		.r(r),
		.q(q),
		.q_n(q_n)
	);

	initial begin
		$dumpfile("sim/sr_latch.vcd");
		$dumpvars(0, sr_latch_tb);

		s = 0; r = 1; #10;
		$display("s=%b r=%b -> q=%b (expected 0) q_n=%b", s, r, q, q_n);

		s = 0; r = 0; #10;
		$display("s=%b r=%b -> q=%b (expected 0) q_n=%b", s, r, q, q_n);

		s = 1; r = 0; #10;
		$display("s=%b r=%b -> q=%b (expected 1) q_n=%b", s, r, q, q_n);

		s = 0; r = 0; #10;
		$display("s=%b r=%b -> q=%b (expected 1) q_n=%b", s, r, q, q_n);

		s = 0; r = 1; #10;
		$display("s=%b r=%b -> q=%b (expected 0) q_n=%b", s, r, q, q_n);

		s = 1; r = 0; #10;
		$display("s=%b r=%b -> q=%b (expected 1) q_n=%b", s, r, q, q_n);

		$finish;

	end
endmodule
