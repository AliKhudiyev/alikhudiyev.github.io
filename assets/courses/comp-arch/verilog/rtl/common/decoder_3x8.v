module decoder_3x8 (
	input wire in1,
	input wire in2,
	input wire in3,
	output wire out1,
	output wire out2,
	output wire out3,
	output wire out4,
	output wire out5,
	output wire out6,
	output wire out7,
	output wire out8
);

	wire [3:0] _out1, _out2;
	decoder_2x4 dec1(.in1(in2), .in2(in3), 
					.out1(_out1[0]), .out2(_out1[1]), 
					.out3(_out1[2]), .out4(_out1[3])
	);

	decoder_2x4 dec2(.in1(in2), .in2(in3), 
					.out1(_out2[0]), .out2(_out2[1]), 
					.out3(_out2[2]), .out4(_out2[3])
	);

	mux_2x1x4 mux_74(.in1(4'b0), .in2(_out1), .s(in1), 
					.out({out8, out7, out6, out5}));
	mux_2x1x4 mux_30(.in1(_out2), .in2(4'b0), .s(in1), 
					.out({out4, out3, out2, out1}));
endmodule
