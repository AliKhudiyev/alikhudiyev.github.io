module encoder_4x2 (
	input wire in1,
	input wire in2,
	input wire in3,
	input wire in4,
	output wire out1,
	output wire out2,
	output wire v
);

	wire in3_n, in4_n;
	wire _out2;
	
	not(in3_n, in3);
	not(in4_n, in4);

	and(_out2, in4_n, in3_n, in2);
	or(out1, in4, in3);
	or(out2, in4, _out2);
	or(v, in4, in3, in2, in1);
endmodule
