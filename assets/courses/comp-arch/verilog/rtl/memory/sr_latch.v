module sr_latch (
	input wire s,
	input wire r,
	output wire q,
	output wire q_n
);
	wire s_n, r_n;

	not(s_n, s);
	not(r_n, r);

	nand(q, s_n, q_n);
	nand(q_n, r_n, q);
endmodule
