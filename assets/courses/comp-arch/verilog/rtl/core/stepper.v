module stepper (
	input wire clk,
	input wire r,
	output wire s1,
	output wire s2,
	output wire s3,
	output wire s4,
	output wire s5,
	output wire s6,
	output wire s7,
	output wire s8
);

	wire [2:0] count;
	counter_3s cntr(.clk(clk), .r(r), .out(count));
	decoder_3x8 dec(.in1(count[0]), .in2(count[1]), .in3(count[2]),
					.out1(s1), .out2(s2), .out3(s3), .out4(s4),
					.out5(s5), .out6(s6), .out7(s7), .out8(s8)
	);
endmodule
