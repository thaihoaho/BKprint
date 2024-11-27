<?php
namespace App\Services;
use App\Repositories\PaymentRepository;

class PaymentService
{
    protected $paymentRepo;

    public function __construct(PaymentRepository $payemntRepo)
    {
        $this->paymentRepo = $payemntRepo;
    }

    public function getAllPayments()
    {
        return $this->paymentRepo->getAll();
    }

    public function getPaymentById($id)
    {
        return $this->paymentRepo->getById($id);
    }

    public function createPayment(array $data)
    {
        return $this->paymentRepo->create($data);
    }

    public function updatePayment($id, array $data)
    {
        return $this->paymentRepo->update($id, $data);
    }
}
