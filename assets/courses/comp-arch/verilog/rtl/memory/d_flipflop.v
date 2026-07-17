module d_flipflop (
	input wire d,
	input wire clk,
	output wire q,
	output wire q_n
);

	wire clk_n;
	wire _q, _q_n;

	not(clk_n, clk);

	d_latch master (
		.d(d),
		.en(clk_n),
		.q(_q),
		.q_n(_q_n)
	);

	d_latch slave (
		.d(_q),
		.en(clk),
		.q(q),
		.q_n(q_n)
	);
endmodule
