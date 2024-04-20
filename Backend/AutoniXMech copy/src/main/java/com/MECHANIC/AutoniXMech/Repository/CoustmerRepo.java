package com.MECHANIC.AutoniXMech.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.MECHANIC.AutoniXMech.model.Coustmer;


@Repository
public interface CoustmerRepo extends JpaRepository<Coustmer , Integer>{
	
	
}