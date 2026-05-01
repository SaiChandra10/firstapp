-- SQL Function to Add Notes
-- This function inserts a new note into the notes table

CREATE OR REPLACE FUNCTION add_note(
    p_title VARCHAR(255),
    p_content TEXT
)
RETURNS TABLE(
    success BOOLEAN,
    message VARCHAR(255),
    note_id INT
) AS $$
DECLARE
    v_note_id INT;
BEGIN
    BEGIN
        -- Validate that title is not null or empty
        IF p_title IS NULL OR TRIM(p_title) = '' THEN
            RETURN QUERY SELECT 
                false AS success,
                'Error: Title cannot be null or empty'::VARCHAR(255) AS message,
                NULL::INT AS note_id;
            RETURN;
        END IF;
        
        -- Validate that content is not null or empty
        IF p_content IS NULL OR TRIM(p_content) = '' THEN
            RETURN QUERY SELECT 
                false AS success,
                'Error: Content cannot be null or empty'::VARCHAR(255) AS message,
                NULL::INT AS note_id;
            RETURN;
        END IF;
        
        -- Insert the note into the notes table
        INSERT INTO notes(title, content)
        VALUES (p_title, p_content)
        RETURNING id INTO v_note_id;
        
        -- Return success response with the new note ID
        RETURN QUERY SELECT 
            true AS success,
            'Note added successfully'::VARCHAR(255) AS message,
            v_note_id AS note_id;
            
    EXCEPTION WHEN OTHERS THEN
        -- Handle any errors and return error response
        RETURN QUERY SELECT 
            false AS success,
            CONCAT('Error: ', SQLERRM)::VARCHAR(255) AS message,
            NULL::INT AS note_id;
    END;
END;
$$ LANGUAGE plpgsql;

