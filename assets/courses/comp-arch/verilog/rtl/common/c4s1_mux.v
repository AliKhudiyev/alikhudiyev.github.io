module c4s1_mux (
	input wire in1,
	input wire in2,
	input wire s,
	output wire out
);
	wire s_not;
	wire term1, term2;
	
	not(s_not, s);
	and(term1, s_not, in1);
	and(term2, s, in2);
	or(out, term1, term2);
endmodule
