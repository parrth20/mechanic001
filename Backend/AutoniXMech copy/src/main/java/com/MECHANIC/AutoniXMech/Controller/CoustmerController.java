package com.MECHANIC.AutoniXMech.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RestController;

import com.MECHANIC.AutoniXMech.Services.Coustmerservices;
import com.MECHANIC.AutoniXMech.model.Coustmer;

@RestController
@RequestMapping("/coustmer")
@CrossOrigin
public class CoustmerController{
	
	@Autowired
	private Coustmerservices coustmerservices;
	
	@PostMapping("/add")
	public String add(@RequestBody Coustmer coustmer) {
		
		coustmerservices.saveCoustmer(coustmer);
		return "New Coustmer is Added";
		
	}
	
	@GetMapping("/getAll")
	public List<Coustmer> getAllCoustmer(){
		return coustmerservices.getAllCoustmer();
	}
	
	
	
}