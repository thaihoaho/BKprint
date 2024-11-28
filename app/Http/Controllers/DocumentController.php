<?php

namespace App\Http\Controllers;
use App\Models\Document;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class documentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $document = document::all();
        //return Inertia::render('Student/Document', ['documents' => $document]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
       // return Inertia::render('Student/CreateDocument'); // Tạo file CreateDocument.jsx
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $request->validate([
        //     'StudentID' => 'required|integer',
        //     'FileName' => 'required|string|max:255',
        //     'FileType' => 'required|string|max:10',
        //     'UploadedDate' => 'required|date',
        // ]);
    
        // Document::create($request->all());
    
        // return redirect()->route('documents.index')->with('success', 'Document created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
