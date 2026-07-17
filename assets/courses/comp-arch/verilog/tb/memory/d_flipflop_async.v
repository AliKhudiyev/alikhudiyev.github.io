module d_flipflop_async_tb;
	reg d, r, clk;
	wire q, q_n;

	d_flipflop_async dffa(
		.d(d),
		.clk(clk),
		.r(r),
		.q(q),
		.q_n(q_n)
	);

	always #5 clk = ~clk;

	initial begin
		$dumpfile("sim/d_flipflop_async.vcd");
		$dumpvars(0, d_flipflop_async_tb);

		clk = 0;
		d <= 1; r <=1; #5;
		$display("d=%b clk=%b r=%b -> q=%b (expected 0) q_n=%b", d, clk, r, q, q_n);

		d <= 1; r <= 0; #5; r <= 1; #5;
		$display("d=%b clk=%b r=%b -> q=%b (expected 0) q_n=%b", d, clk, r, q, q_n);

		d <= 1; #5; r <= 0; #5;
		$display("d=%b clk=%b r=%b -> q=%b (expected 1) q_n=%b", d, clk, r, q, q_n);

		d <= 0; #7; d <= 1; #10;
		$display("d=%b clk=%b r=%b -> q=%b (expected 0) q_n=%b", d, clk, r, q, q_n);
		d <= 0; #3;
		$display("d=%b clk=%b r=%b -> q=%b (expected 1) q_n=%b", d, clk, r, q, q_n);

		#5; clk <= 0; #5; clk <= 1; #5;
		$display("d=%b clk=%b r=%b -> q=%b (expected 0) q_n=%b", d, clk, r, q, q_n);
		d <= 1; clk <= 0; #5; clk <= 1; #5;
		$display("d=%b clk=%b r=%b -> q=%b (expected 1) q_n=%b", d, clk, r, q, q_n);

		clk <= 0; #5; clk <= 1; #2; d <= 0; #3;
		$display("d=%b clk=%b r=%b -> q=%b (expected 1) q_n=%b", d, clk, r, q, q_n);
		clk <= 0; #5; clk <= 1; #2; d <= 1; #3;
		$display("d=%b clk=%b r=%b -> q=%b (expected 0) q_n=%b", d, clk, r, q, q_n);

		$finish;

	end
endmodule
