module reg_8b (
	input wire [7:0] in,
	input wire clk,
	input wire r,
	output wire [7:0] out
);
	d_flipflop_async dffa0(.d(in[0]), .clk(clk), .r(r), .q(out[0]));
	d_flipflop_async dffa1(.d(in[1]), .clk(clk), .r(r), .q(out[1]));
	d_flipflop_async dffa2(.d(in[2]), .clk(clk), .r(r), .q(out[2]));
	d_flipflop_async dffa3(.d(in[3]), .clk(clk), .r(r), .q(out[3]));
	d_flipflop_async dffa4(.d(in[4]), .clk(clk), .r(r), .q(out[4]));
	d_flipflop_async dffa5(.d(in[5]), .clk(clk), .r(r), .q(out[5]));
	d_flipflop_async dffa6(.d(in[6]), .clk(clk), .r(r), .q(out[6]));
	d_flipflop_async dffa7(.d(in[7]), .clk(clk), .r(r), .q(out[7]));
endmodule
