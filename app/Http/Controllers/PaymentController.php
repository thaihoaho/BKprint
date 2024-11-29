<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\PaymentService;

class PaymentController extends Controller
{
    //
    protected $paymentService;
    public function __construct(paymentService $paymentService)
    {
        $this->paymentService = $paymentService;
    }

    public function index()
    {
        $payment = $this->paymentService->getAllPayments();
        // return view('payment.index', compact('payment'));
    }

    public function create()
    {
        return view('product.create');
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'PaymentMethod' => 'required|string|max:50',
            'Amount' => 'required|numeric',
        ]);

        $this->paymentService->createPayment($data);
        // return redirect()->route('payment.index');
    }

    public function show($id)
    {
        $payment = $this->paymentService->getPaymentById($id);
        // return view('payemnt.show', compact('payment'));
    }
}
