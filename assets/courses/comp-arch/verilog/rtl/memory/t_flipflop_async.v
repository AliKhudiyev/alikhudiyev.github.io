module t_flipflop_async (
	input wire t,
	input wire clk,
	input wire r,
	output wire q,
	output wire q_n
);

	wire data;
	mux_2x1 mux_data(.in1(), .in2(), .s(t), .out(data));
	d_flipflop_async dff(.d(data), .clk(clk), .r(r), .q(q), .q_n(q_n));
endmodule
