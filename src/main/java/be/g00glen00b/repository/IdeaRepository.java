package be.g00glen00b.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import be.g00glen00b.dto.IdeaDto;

public interface IdeaRepository  extends JpaRepository<IdeaDto, Integer> {

}
