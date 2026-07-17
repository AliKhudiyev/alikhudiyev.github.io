module d_flipflop_async (
	input wire d,
	input wire clk,
	input wire r,
	output wire q,
	output wire q_n
);

	wire clk_n;
	wire r_n;
	wire _q, _q_n;

	not(clk_n, clk);
	not(r_n, r);

	d_latch master (
		.d(d),
		.en(clk_n),
		.q(_q),
		.q_n(_q_n)
	);

	wire _q_or_reset, _clk;

	and(_q_or_reset, _q, r_n);
	or(_clk, clk, r);

	d_latch slave (
		.d(_q_or_reset),
		.en(_clk),
		.q(q),
		.q_n(q_n)
	);
endmodule
