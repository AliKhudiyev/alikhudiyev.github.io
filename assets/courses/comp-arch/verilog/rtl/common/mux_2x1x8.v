module mux_2x1x8 (
	input wire [7:0] in1,
	input wire [7:0] in2,
	input wire s,
	output wire [7:0] out
);
	wire [7:0] _s = {s,s,s,s, s,s,s,s};
	wire [7:0] s_not;
	wire [7:0] term1, term2;

	not nots[7:0] (s_not, _s);
	and ands1[7:0] (term1, s_not, in1);
	and ands2[7:0] (term2, _s, in2);
	or ors[7:0] (out, term1, term2);
endmodule
