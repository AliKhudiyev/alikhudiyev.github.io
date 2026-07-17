module decoder_2x4 (
	input wire in1,
	input wire in2,
	output wire out1,
	output wire out2,
	output wire out3,
	output wire out4
);
	
	wire in1_n, in2_n;

	not(in1_n, in1);
	not(in2_n, in2);

	and(out1, in1_n, in2_n);
	and(out2, in1_n, in2);
	and(out3, in1, in2_n);
	and(out4, in1, in2);
endmodule
