module counter_3s (
	input wire clk,
	input wire r,
	output wire [2:0] out
);

	// wire out1, out2, out3;
	t_flipflop_async t1(.t(1'b1), .clk(clk), .r(r), .q(out[0]));
	t_flipflop_async t2(.t(out[0]), .clk(clk), .r(r), .q(out[1]));

	wire in3;
	and(in3, out[0], out[1]);
	t_flipflop_async t3(.t(in3), .clk(clk), .r(r), .q(out[2]));
endmodule
