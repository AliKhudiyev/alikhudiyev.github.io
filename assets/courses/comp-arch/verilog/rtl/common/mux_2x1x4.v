module mux_2x1x4 (
	input wire [3:0] in1,
	input wire [3:0] in2,
	input wire s,
	output wire [3:0] out
);
	wire [3:0] _s = {s,s,s,s};
	wire [3:0] s_not;
	wire [3:0] term1, term2;

	not nots[3:0] (s_not, _s);
	and ands1[3:0] (term1, s_not, in1);
	and ands2[3:0] (term2, _s, in2);
	or ors[3:0] (out, term1, term2);
endmodule
