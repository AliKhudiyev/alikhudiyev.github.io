module ram_6x8 (
	input wire [7:0] data,
	input wire [5:0] addr,
	input wire we,
	input wire clk,
	input wire r,
	output wire [7:0] out
);

	wire s1, s2, s3, s4;
	decoder_2x4 dec(.in1(addr[5]), .in2(addr[4]), .out1(s1), .out2(s2), .out3(s3), .out4(s4));

	wire [7:0] in1, out1;
	ram_4x8 ram1(.data(data), .addr(addr[3:0]), .we(we), .clk(clk), .r(r), .out(in1));
	mux_2x1x8 mux1(.in1(in1), .in2(data), .s(s1), .out(out1));

	wire [7:0] in2, out2;
	ram_4x8 ram2(.data(data), .addr(addr[3:0]), .we(we), .clk(clk), .r(r), .out(in2));
	mux_2x1x8 mux2(.in1(in2), .in2(data), .s(s2), .out(out2));

	wire [7:0] in3, out3;
	ram_4x8 ram3(.data(data), .addr(addr[3:0]), .we(we), .clk(clk), .r(r), .out(in3));
	mux_2x1x8 mux3(.in1(in3), .in2(data), .s(s3), .out(out3));

	wire [7:0] in4, out4;
	ram_4x8 ram4(.data(data), .addr(addr[3:0]), .we(we), .clk(clk), .r(r), .out(in4));
	mux_2x1x8 mux4(.in1(in4), .in2(data), .s(s4), .out(out4));

	mux_4x1x8 mux_out(.in1(out1), .in2(out2), .in3(out3), .in4(out4), 
					.s1(addr[5]), .s2(addr[4]), .out(out)
	);
endmodule
