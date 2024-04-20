package com.MECHANIC.AutoniXMech.Services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.MECHANIC.AutoniXMech.Repository.CoustmerRepo;
import com.MECHANIC.AutoniXMech.model.Coustmer;

@Service
public class CoustmerServicesimpl implements Coustmerservices{
	
	@Autowired
	private CoustmerRepo coustmerrepo;

	@Override
	public Coustmer saveCoustmer(Coustmer coustmer) {
		// TODO Auto-generated method stub
		return coustmerrepo.save(coustmer);
	}

	@Override
	public List<Coustmer> getAllCoustmer() {
		// TODO Auto-generated method stub
		return coustmerrepo.findAll();
		
	}
	
	
	
}