<?php
use App\Http\Controllers\PrinterController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\print_jobController;
use App\Http\Controllers\PostController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\DocumentController;
use Inertia\Inertia;
 
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});
 
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');
 
Route::middleware(['auth'])->group(function () {
    Route::resource('posts', PostController::class)
        ->names('posts');
});
 
Route::middleware(['auth'])->group(function () {
    Route::resource('printers', PrinterController::class)
        ->names('printers');
});

Route::middleware(['auth'])->group(function () {
    Route::resource('print_jobs', Print_JobController::class)
        ->names('print_jobs');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth'])->group(function () {
    Route::resource('documents', DocumentController::class)
        ->names('documents');
});
require __DIR__.'/auth.php';