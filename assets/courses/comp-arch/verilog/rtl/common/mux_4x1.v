module mux_4x1 (
	input wire in1,
	input wire in2,
	input wire in3,
	input wire in4,
	input wire s1,
	input wire s2,
	output wire out
);

	wire _out1, _out2;
	mux_2x1 mux1(.in1(in1), .in2(in2), .s(s2), .out(_out1));
	mux_2x1 mux2(.in1(in3), .in2(in4), .s(s2), .out(_out2));
	mux_2x1 slct(.in1(_out1), .in2(_out2), .s(s1), .out(out));
endmodule
