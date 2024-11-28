<?php

namespace App\Http\Controllers;

use App\Models\Printer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PrinterController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $printers = Printer::all();
        return Inertia::render('Printers/Index', ['printers' => $printers]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //return Inertia::render('Printers/Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $request->validate([
            'Brand' => 'required|string|max:50',
            'Model' => 'required|string|max:50',
            'Description' => 'required|string',
            'CampusName' => 'required|string|max:50',
            'BuildingName' => 'required|string|max:50',
            'RoomNumber' => 'required|string|max:50',
            // 'status' thiếu cái này a
        ]);
 
        $printers = new Printer();
        $printers->Brand = $request->Brand;
        $printers->Model = $request->Model;
        $printers->Description = $request->Description;
        $printers->CampusName = $request->CampusName;
        $printers->BuildingName = $request->BuildingName;
        $printers->RoomNumber = $request->RoomNumber;
        $printers->save();
 
        //return Redirect::route('Printers.index')->with('success', 'Post created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(Printer $printer)
    {
        // return Inertia::render('Printers/Show', ['Printer' => $printer]);

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Printer $printer)
    {
        // return Inertia::render('Printers/Edit', ['Printer' => $printer]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $request->validate([
            'Brand' => 'required|string|max:50',
            'Model' => 'required|string|max:50',
            'Description' => 'required|string',
            'CampusName' => 'required|string|max:50',
            'BuildingName' => 'required|string|max:50',
            'RoomNumber' => 'required|string|max:50',
            // 'status' thiếu cái này a
        ]);
 
        $printers = new Printer();
        $printers->Brand = $request->Brand;
        $printers->Model = $request->Model;
        $printers->Description = $request->Description;
        $printers->CampusName = $request->CampusName;
        $printers->BuildingName = $request->BuildingName;
        $printers->RoomNumber = $request->RoomNumber;
        $printers->save();
 
        //return Redirect::route('Printers.index')->with('success', 'Post created successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        // return Redirect::route('posts.index')->with('success', 'Post deleted successfully.');
    }
}
