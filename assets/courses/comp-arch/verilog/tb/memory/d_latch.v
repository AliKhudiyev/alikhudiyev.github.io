module d_latch_tb;
	reg d, en;
	wire q, q_n;

	d_latch dlatch(
		.d(d),
		.en(en),
		.q(q),
		.q_n(q_n)
	);

	initial begin
		$dumpfile("sim/d_latch.vcd");
		$dumpvars(0, d_latch_tb);

		d = 0; en = 1; #10;
		$display("d=%b en=%b -> q=%b (expected 0) q_n=%b", d, en, q, q_n);

		d = 0; en = 0; #10;
		$display("d=%b en=%b -> q=%b (expected 0) q_n=%b", d, en, q, q_n);

		d = 1; en = 0; #10;
		$display("d=%b en=%b -> q=%b (expected 0) q_n=%b", d, en, q, q_n);

		d = 1; en = 1; #10;
		$display("d=%b en=%b -> q=%b (expected 1) q_n=%b", d, en, q, q_n);

		d = 1; en = 0; #10;
		$display("d=%b en=%b -> q=%b (expected 1) q_n=%b", d, en, q, q_n);

		d = 0; en = 0; #10;
		$display("d=%b en=%b -> q=%b (expected 1) q_n=%b", d, en, q, q_n);

		$finish;

	end
endmodule
