module ram_2x8 (
	input wire [7:0] data,
	input wire [1:0] addr,
	input wire we,
	input wire clk,
	input wire r,
	output wire [7:0] out
);

	wire _s1, _s2, _s3, _s4;
	decoder_2x4 dec(.in1(addr[1]), .in2(addr[0]), 
					.out1(_s1), .out2(_s2), .out3(_s3), .out4(_s4));

	wire s1, s2, s3, s4;
	and(s1, _s1, we);
	and(s2, _s2, we);
	and(s3, _s3, we);
	and(s4, _s4, we);

	wire [7:0] in1, out1;
	reg_8b reg1(.in(data), .clk(clk), .r(r), .out(in1));
	mux_2x1x8 mux1(.in1(in1), .in2(data), .s(s1), .out(out1));

	wire [7:0] in2, out2;
	reg_8b reg2(.in(data), .clk(clk), .r(r), .out(in2));
	mux_2x1x8 mux2(.in1(in2), .in2(data), .s(s2), .out(out2));

	wire [7:0] in3, out3;
	reg_8b reg3(.in(data), .clk(clk), .r(r), .out(in3));
	mux_2x1x8 mux3(.in1(in3), .in2(data), .s(s3), .out(out3));

	wire [7:0] in4, out4;
	reg_8b reg4(.in(data), .clk(clk), .r(r), .out(in4));
	mux_2x1x8 mux4(.in1(in4), .in2(data), .s(s4), .out(out4));

	mux_4x1x8 mux_out(.in1(out1), .in2(out2), .in3(out3), .in4(out4), 
					.s1(addr[0]), .s2(addr[1]), .out(out)
	);
endmodule
