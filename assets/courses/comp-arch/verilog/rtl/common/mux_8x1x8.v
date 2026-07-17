module mux_8x1x8 (
	input wire [7:0] in1,
	input wire [7:0] in2,
	input wire [7:0] in3,
	input wire [7:0] in4,
	input wire [7:0] in5,
	input wire [7:0] in6,
	input wire [7:0] in7,
	input wire [7:0] in8,
	input wire s1,
	input wire s2,
	input wire s3,
	output wire [7:0] out
);

	wire [7:0] _out1, _out2;
	mux_4x1x8 mux1(.in1(in1), .in2(in2), .s1(s2), .s2(s3), .out(_out1));
	mux_4x1x8 mux2(.in1(in3), .in2(in4), .s1(s2), .s2(s3), .out(_out2));
	mux_2x1x8 slct(.in1(_out1), .in2(_out2), .s(s1), .out(out));
endmodule
