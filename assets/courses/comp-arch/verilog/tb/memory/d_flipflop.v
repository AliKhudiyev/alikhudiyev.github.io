module d_flipflop_tb;
	reg d, clk;
	wire q, q_n;

	d_flipflop dff(
		.d(d),
		.clk(clk),
		.q(q),
		.q_n(q_n)
	);

	always #5 clk = ~clk;

	initial begin
		$dumpfile("sim/d_flipflop.vcd");
		$dumpvars(0, d_flipflop_tb);

		clk = 0;
		d <= 0; #5;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 0) q_n=%b", $time, d, clk, q, q_n);

		d <= 1; #10;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 1) q_n=%b", $time, d, clk, q, q_n);

		d <= 0; #5;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 0) q_n=%b", $time, d, clk, q, q_n);

		d <= 1; #12;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 0) q_n=%b", $time, d, clk, q, q_n);

		d <= 0; #3;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 1) q_n=%b", $time, d, clk, q, q_n);

		d <= 1; #17;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 1) q_n=%b", $time, d, clk, q, q_n);

		d <= 0; #10;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 1) q_n=%b", $time, d, clk, q, q_n);

		d <= 1; #3;
		$display("[%0t] d=%b clk=%b -> q=%b (expected 0) q_n=%b", $time, d, clk, q, q_n);

		$finish;

	end
endmodule
