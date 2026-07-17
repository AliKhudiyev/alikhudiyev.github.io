module d_latch (
	input wire d,
	input wire en,
	output wire q,
	output wire q_n
);
	wire d_n;
	wire s, r;

	not(d_n, d);
	and(s, d, en);
	and(r, d_n, en);

	sr_latch srlatch (
		.s(s),
		.r(r),
		.q(q),
		.q_n(q_n)
	);
endmodule
